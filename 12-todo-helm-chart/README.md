# Helm Chart: Secure To-Do Application

This repository contains a Helm chart for deploying a secure and scalable To-Do application in Kubernetes. It also includes Trivy security scan results to ensure best practices are followed.

## Features
- **Security**:
  - Configured `securityContext` for better isolation
  - Containers run without root privileges
- **Customisation**:
  - Easily override defaults using `values.yaml`
  - Flexible ingress and service configurations
- **Validation**:
  - Includes Trivy scan results to highlight potential misconfigurations

## File Structure
```plaintext
12-todo-helm-chart/
├── my-todo-list/               # Helm chart for the To-Do application
│   ├── Chart.yaml              # Metadata about the chart
│   ├── values.yaml             # Default values for the chart
│   ├── templates/              # Kubernetes manifests (templates)
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── ingress.yaml
│   │   ├── NOTES.txt
│   │   └── _helpers.tpl
├── trivy-scan-results/         # Results from Trivy scans
│   ├── summary.txt
│   ├── detailed.json
│   └── dryrun.yaml
```

## Usage

### Deploy the Application
1. Clone this repository:
   ```bash
   git clone https://github.com/Kelcode-Dev/bobs-kubernetes-journey.git
   cd bobs-kubernetes-journey/12-todo-helm-chart/my-todo-list
   ```
2. Deploy the Helm chart locally:
   ```bash
   helm install todo . -f values.yaml
   ```

3. Customise your deployment:
   - Modify `values.yaml` to adjust replica counts, ingress settings, or other configurations.
   - Use `-f` with custom override files:
     ```bash
     helm install todo . -f values.yaml
     ```

### Validate and Test
- Run a dry-run to inspect the generated Kubernetes manifests:
  ```bash
  helm template todo . -f values.yaml > dryrun.yaml
  ```
- Use tools like Trivy to scan for security or configuration issues:
  ```bash
  trivy config dryrun.yaml
  ```

## Learn More
For a detailed walkthrough of this project, check out the accompanying article: [Bob's Journey to Building Secure Helm Charts](https://kelcode.co.uk/build-a-secure-chart-for-a-todo-app/).
