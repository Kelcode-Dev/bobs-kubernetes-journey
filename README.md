# Bob's Kubernetes Journey

Welcome to **Bob's Kubernetes Journey**, a collection of resources, examples, and projects accompanying the [article series](https://kelcode.co.uk). Whether you're learning Kubernetes, Helm, or other related technologies, this repository is here to guide you step by step.

## ⚠️ Disclaimer

The code in this repository is for **educational purposes only** and is **not secure** in its current form. It demonstrates concepts like secure containerisation and Kubernetes deployments but:
- **Does not implement proper input validation.**
- **Lacks authentication and authorisation mechanisms.**
- **Is vulnerable to attacks like injection and XSS.**

Do not use this code in production environments without significant modifications to address these security concerns.

## 📖 About

This repository is designed to provide:
- Practical examples from each article in the series.
- A shared application (`app/`) used across examples for consistency.
- Reusable configurations and templates to kickstart your Kubernetes projects.

Each folder corresponds to an article in the series and includes relevant Dockerfiles, configurations, and example outputs.

## 🗂️ Repository Structure

```plaintext
repo-root/
├── app/                     # Shared To-Do app used across all examples
│   ├── package.json         # App dependencies
│   ├── package-lock.json    # Calculated package dependencies
│   ├── app.js               # Main application logic
│   ├── views/               # HTML templates
│   ├── public/              # Static assets
│   └── README.md            # App-specific instructions
├── 01-secure-docker-images/ # Part 1: Secure Docker Images
│   ├── Dockerfile
│   ├── trivy-scan-results/  # Example Trivy scan outputs
│   └── README.md
├── 02-multi-stage-builds/   # Part 2: Multi-Stage Builds
│   ├── Dockerfile
│   ├── trivy-scan-results/  # Example Trivy scan outputs
│   └── README.md
└── README.md                # Repository-wide overview
```

## 🛠️ How to Build and Run Examples

### 1. Navigate to the Repository Root
Ensure you are in the root directory of the repository:
```bash
cd /path/to/bobs-kubernetes-journey
```

### 2. Build the Desired Image
Each part includes its own Dockerfile. For example, to build the secure Docker image from Part 1:
```bash
docker build -t secure-node-app -f 01-secure-docker-images/Dockerfile .
```

For Part 2:
```bash
docker build -t multi-stage-todo-app -f 02-multi-stage-builds/Dockerfile .
```

### 3. Run the Container
Once built, run the container:
```bash
docker run -p 3000:3000 secure-node-app
```

Replace `secure-node-app` with the appropriate image name for other parts.

## 📚 Articles in the Series

1. **[Secure Docker Images](https://kelcode.co.uk/building-secure-docker-images-best-practices-for-security-first-containers/)**
   Learn how to build secure Docker images with pinned base images and non-root users.

2. **[Multi-Stage Builds](https://kelcode.co.uk/mastering-multi-stage-docker-builds/)**
   Master multi-stage builds for leaner and faster containers.

3. **[Secrets and ConfigMaps](#https://kelcode.co.uk/bobs-journey-into-secrets-and-config-maps/)**
   Manage sensitive data securely using Kubernetes Secrets and ConfigMaps.

4. **[Helm Basics](#)**
   Discover Helm and learn to deploy applications with reusable charts.

See the full series [here](https://kelcode.co.uk/tag/bobsjourney/) (more coming soon)

## 🌟 Contributing

Contributions are welcome! Feel free to open issues, submit pull requests, or suggest new ideas.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
