## 自定义组件 <!-- {docsify-ignore} -->

## 配置其他可播放的文件

![custom-component-playable-file-selector](../img/custom-component-playable-file-selector.png)

## 配置其他播放器

**注：子播放器功能仅在v1.6.1后可用**

![custom-component-player](../img/custom-component-player-1.png)

**为什么自定义播放器无法启动/启动后未正常打开可播放文件**

1. 自定义播放器本身需要是可执行文件，并且可接受第一个参数作为播放文件，调用播放器时实际使用的命令类似（v1.6.0开始你可以指定命令模板）：

```
"C:\Potplayer.exe" "C:\龙珠\1.mp4"
```
  
可以通过打开命令行（windows通过win+r，输入cmd，回车打开）然后按照以上格式测试
  

2. 如果以上方法验证可行，还是无法正常播放，则尝试以下步骤：
  + 在软件点击播放
  + 打开任务管理器，选择【详细进程】，并确保有【命令行】这一列，如果未找到该列，则在【名称】列右键，点击【选择列】，然后勾选【命令行】
  
      ![image](https://user-images.githubusercontent.com/2888789/165484808-7f7b11c2-1588-434a-8bfb-55faf7ead837.png)
  + 找到自定义播放器的进程名，左键点击，然后ctrl+c复制，然后将结果粘贴给开发者