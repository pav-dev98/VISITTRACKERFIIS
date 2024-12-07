# Project Name

## Development Setup with DevContainers

### Prerequisites
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install [VSCode](https://code.visualstudio.com/)
3. Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VSCode

### Getting Started
1. Clone the repository
   ```bash
   git clone [repository-url]
   ```

2. Open in VSCode
   ```bash
   code [project-folder]
   ```

3. When prompted "Reopen in Container" click "Reopen"
   - Or press F1 and select "Remote-Containers: Reopen in Container"

4. Wait for the container to build (first time only)

### What's Included
- React + Vite setup
- ESLint + Prettier configuration
- Git configuration
- Common VSCode extensions
- Tailwind CSS support
- Development tools

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier

### Best Practices
1. Always work inside the container
2. Use the provided ESLint and Prettier configurations
3. Commit often and write meaningful commit messages
4. Keep dependencies updated

### Troubleshooting
If you encounter issues:
1. Try rebuilding the container: F1 -> "Remote-Containers: Rebuild Container"
2. Check Docker is running
3. Ensure all prerequisites are installed
4. Contact the team lead if issues persist
