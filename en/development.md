# Development

The following applies to v1.9.0 and later source layout.

## Requirements

- Windows 10/11 (Windows only)
- .NET SDK 9.0+
- Node.js 20+ (LTS recommended)
- Yarn 1.22+
- Microsoft Edge / WebView2 Runtime

## Get sources

Clone the repositories below into the same parent folder:

- `InsideWorld` (main repo)
- `LazyMortal`
- `bakabase.infrastructures`

Example layout:

```
I:\Code\Anobaka\
  InsideWorld\
  LazyMortal\
  bakabase.infrastructures\
  Bakabase.Docs\
```

## Install dependencies

1. Restore .NET dependencies (via solution root or IDE)
2. Frontend dependencies:
   - In `src/ClientApp`: `yarn install`

> Note: For versions prior to v1.9.0, paths and commands differ. Refer to legacy docs if needed.

## Run and debug

1. In `src/ClientApp`: `yarn start`
2. In IDE, set `Bakabase` as startup project and run

Once started, you can find the listening port and API docs URL in System Settings.

## Contributing

- Provide minimal repro steps/data in issues
- PRs should explain motivation, changes, and verification
- Follow conventional commit styles when possible (feat/fix/chore/docs)
- Planning and progress:
  - Milestones: `https://github.com/anobaka/Bakabase/milestones`
  - Project board: `https://github.com/users/anobaka/projects/3`

## Troubleshooting

- Missing WebView2: install Edge or WebView2 Runtime
- Port in use: adjust in System Settings or free the port
- Node/Yarn mismatch: upgrade to Node 20+ and Yarn 1.22+
