# Multi-Stage Builds

This folder demonstrates how to create efficient and secure Docker images using multi-stage builds.

## Key Features

- **Multi-Stage Builds**:
  - Separates build and runtime environments.
  - Keeps final images lightweight by only including production dependencies.

- **Non-Root User**:
  - Runs the app as a non-root user for enhanced security.

- **Efficient Layering**:
  - Only essential files are copied to the final stage, minimising the attack surface.

## Instructions

### 1. Set the Build Context to the Repository Root
To build the image, run the following command from the root of the repository:
```bash
docker build -t multi-stage-todo-app -f 02-multi-stage-builds/Dockerfile .
```

### 2. Run the Container
Run the container using:
```bash
docker run -p 3000:3000 multi-stage-todo-app
```

### 3. Scan the Image
Use [Trivy](https://aquasecurity.github.io/trivy/) to scan the built image:
```bash
trivy image multi-stage-todo-app
```

Example Trivy scan results are available in the trivy-scan-results/ directory:

* scan-summary.txt: A brief summary of vulnerabilities.
* scan-detailed.json: A detailed JSON report of vulnerabilities.

## Learn More

Visit the [article](https://kelcode.co.uk/mastering-multi-stage-docker-builds/) for a deeper dive into multi-stage builds and their benefits.
