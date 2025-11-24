# n8n Temporary Sites

This repository is designed for hosting temporary n8n workflow sites for testing, development, and demonstration purposes.

## Overview

This repository provides a structured environment for deploying and managing temporary n8n instances. Each site can be independently configured and deployed for specific use cases.

## Directory Structure

```
.
├── sites/              # Individual site configurations
│   └── README.md      # Guide for creating new sites
├── configs/           # Shared configuration templates
│   └── README.md      # Configuration documentation
├── scripts/           # Deployment and management scripts
│   └── README.md      # Scripts documentation
└── docs/              # Additional documentation
    └── README.md      # Documentation index
```

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/tkachenkoinfuse/n8n_sites.git
   cd n8n_sites
   ```

2. **Create a new site**
   - Navigate to the `sites/` directory
   - Copy a template or create a new configuration
   - Follow the setup instructions in `sites/README.md`

3. **Deploy a site**
   - Use the deployment scripts in `scripts/` directory
   - Follow the deployment guide in `docs/deployment.md`

## Features

- **Isolated Environments**: Each site runs independently
- **Easy Configuration**: Simple configuration files for quick setup
- **Temporary Deployments**: Designed for short-term hosting needs
- **Version Control**: Track all site configurations in git

## Use Cases

- Testing new n8n workflows
- Demonstrating workflow capabilities
- Development and staging environments
- Training and educational purposes
- Proof of concept deployments

## Contributing

When adding new sites or configurations:
1. Follow the naming conventions in each directory
2. Document your site configuration
3. Test thoroughly before committing
4. Clean up unused sites regularly

## License

This repository is for internal use and temporary deployments.

## Support

For questions or issues, please contact the repository maintainer.