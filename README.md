# Tauri Repro Test

A Tauri application with Next.js frontend for testing and reproduction purposes.

## 🔒 Security Status

✅ **Security Audit Completed** - No leaked sensitive information found.

For detailed security audit results, see [SECURITY_AUDIT.md](./SECURITY_AUDIT.md).

## Project Structure

- `src/` - Next.js frontend application
- `src-tauri/` - Tauri Rust backend
- `src-tauri/gen/android/` - Android platform-specific code

## Environment Setup

This project uses environment variables for configuration. To get started:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your configuration values.

**Note:** `.env` files are gitignored and will not be committed to the repository.

## Development

### Prerequisites

- Node.js and npm/bun
- Rust toolchain
- Tauri CLI

### Available Scripts

```bash
# Start Next.js development server
bun dev-server

# Build Next.js application
bun run build

# Run Android development
bun dev-android

# Lint code
bun run lint

# Clean Rust build artifacts
bun run clean
```

## Building

This project uses:
- **Next.js** for the frontend (static export)
- **Tauri** for the native application wrapper
- **Gradle** for Android builds

## Security Best Practices

This repository follows security best practices:

✅ Proper `.gitignore` configuration to exclude sensitive files  
✅ Environment variables for configuration (not hardcoded)  
✅ No API keys, tokens, or credentials in source code  
✅ Android signing keys excluded from version control  
✅ Regular security audits

## License

See repository license.

## Contributing

When contributing, please ensure:
- No sensitive information is committed
- Environment variables use `.env` (not committed)
- API keys and secrets are never hardcoded
- Follow the existing `.gitignore` patterns
