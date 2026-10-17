import React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { MotionConfig } from "framer-motion";
import DeviceMapCanvas, { KindBadge, KindGlyph } from "@/features/federation/map/DeviceMapCanvas";
import type { DeviceGraph, MapNode } from "@/features/federation/map/graph";
import { RemoteDevicePlatform } from "@/sdk/constants";
import i18n from "@/i18n";
import "@/styles/globals.css";
import "./preview.css";

// Fictional documentation data only. No API client, device discovery or live pairing is used.
const en = new URLSearchParams(location.search).get("lang") === "en";
const copy = en ? {
  headline: "Keep your media anywhere. Manage it together.",
  intro: "Two everyday computers. Two always-on servers. One familiar resource list.",
  feature: "MULTI-DEVICE MANAGEMENT", example: "ILLUSTRATIVE SETUP", map: "Device map", view: "Gaming PC’s view",
  mapNote: "Direct connections of this device", online: "All four devices online",
  management: "Management → controlled device", sync: "Definitions sync ↔",
  usage: "A place for every collection", controllers: "EVERYDAY CONTROLLERS", servers: "ALWAYS-ON SERVERS",
  names: ["Gaming PC", "Travel MacBook", "Cinema NAS", "Anime Server"],
  media: ["Games · local videos", "Music · travel comics", "Movies · TV shows", "Anime · manga"],
  roles: ["Windows · desktop app", "macOS · desktop app", "Linux · Docker server", "Linux · headless server"],
  benefits: ["Search across authorized devices", "Use your existing resource tools", "Leave media on its original device"],
  note: "Example names and content. Each controller pairs with its servers separately; the map shows only this device’s connections.",
  fine: "Definitions sync does not copy media. Playback depends on file access, path mappings and player capabilities.",
} : {
  headline: "媒体分散存放，管理集中在手边。",
  intro: "两台常用电脑、两台常开服务端，继续使用熟悉的资源列表。",
  feature: "多设备互联", example: "示例配置", map: "设备关系图", view: "书房电脑视角",
  mapNote: "展示当前设备的直接连接", online: "4 台设备均在线",
  management: "管理 → 被管理设备", sync: "定义同步 ↔",
  usage: "每台设备，各有所长", controllers: "常用控制端", servers: "常开服务端",
  names: ["书房电脑", "随身 MacBook", "影音 NAS", "动漫小主机"],
  media: ["游戏 · 本机影片", "音乐 · 随身漫画", "电影 · 剧集", "动画 · 漫画"],
  roles: ["Windows · 桌面端", "macOS · 桌面端", "Linux · Docker 服务端", "Linux · 无界面服务端"],
  benefits: ["一处搜索已授权设备", "沿用原有资源管理功能", "媒体文件留在原设备"],
  note: "名称和内容均为演示。两台控制端分别与服务端配对；此图只展示书房电脑的直接连接。",
  fine: "定义同步不会复制媒体文件；播放仍取决于文件访问、路径映射及播放器能力。",
};

const node = (id: string, index: number, kind: MapNode["kind"], platform: RemoteDevicePlatform): MapNode => ({
  id, name: copy.names[index], self: id === "self", ghost: false, kind, platform,
  presence: "online", issues: [], unverified: false, namesakes: [], keys: [id],
  sources: { managers: [], managersMatchedByName: false, managementRequestsIn: [], managementRequestsOut: [], syncRequests: [] },
});
const graph: DeviceGraph = {
  canManageServers: true,
  self: node("self", 0, "desktop", RemoteDevicePlatform.Windows),
  nodes: [node("cinema", 2, "server", RemoteDevicePlatform.Linux), node("anime", 3, "server", RemoteDevicePlatform.Linux), node("macbook", 1, "desktop", RemoteDevicePlatform.MacOS)],
  edges: [
    { id: "management:cinema", kind: "management", nodeId: "cinema", out: "active", in: "none" },
    { id: "management:anime", kind: "management", nodeId: "anime", out: "active", in: "none" },
    { id: "management:macbook", kind: "management", nodeId: "macbook", out: "active", in: "active" },
    { id: "sync:macbook", kind: "sync", nodeId: "macbook", out: "active", in: "active", mode: "twoWay" },
  ],
};

function Device({ index }: { index: number }) {
  return <div className="device-description"><svg viewBox="-19 -17 38 34"><KindGlyph kind={index < 2 ? "desktop" : "server"} className={index < 2 ? "stroke-primary" : "stroke-default-500"}/></svg><div><div className="device-name">{copy.names[index]}<span>{copy.media[index]}</span></div><div className="device-platform">{copy.roles[index]}</div></div></div>;
}

function Preview() {
  return <main className={en ? "preview english" : "preview"}>
    <header><div className="eyebrow"><span className="wordmark">BAKABASE</span><span className="divider"/><span>{copy.feature}</span><span className="beta">2.4 BETA</span></div><h1>{copy.headline}</h1><p>{copy.intro}</p></header>
    <section className="app-frame">
      <div className="app-bar"><div className="app-title"><svg viewBox="-19 -17 38 34"><KindGlyph kind="desktop" className="stroke-primary"/></svg><strong>{copy.map}</strong><span className="view-label">{copy.view}</span></div><span className="example">{copy.example}</span></div>
      <div className="app-body"><section className="map-region"><div className="map-meta"><span>{copy.mapNote}</span><span className="presence"><i/>{copy.online}</span></div><div className="drawing"><DeviceMapCanvas graph={graph} onSelect={() => {}} initialWidth={730}/></div><div className="map-legend"><span><KindBadge kind="management"/>{copy.management}</span><span><KindBadge kind="sync"/>{copy.sync}</span></div></section>
      <aside><h2>{copy.usage}</h2><h3>{copy.controllers}<span>02</span></h3><Device index={0}/><Device index={1}/><h3>{copy.servers}<span>02</span></h3><Device index={2}/><Device index={3}/><div className="aside-note">{copy.note}</div></aside></div>
      <div className="benefits">{copy.benefits.map((item, i) => <span key={item}><b>{String(i+1).padStart(2,"0")}</b>{item}</span>)}</div>
    </section><footer>{copy.fine}</footer>
  </main>;
}

void i18n.changeLanguage(en ? "en-US" : "zh-CN").then(() => {
  document.documentElement.lang = en ? "en" : "zh-CN";
  createRoot(document.getElementById("root")!).render(<I18nextProvider i18n={i18n}><MotionConfig reducedMotion="always"><Preview/></MotionConfig></I18nextProvider>);
});
