# Kubernetes Pod Security Examples

This folder contains YAML configurations for implementing pod security in Kubernetes.

## Files

### Pod Security Policies
- **`pod-security/no-root-psp.yaml`**:
  - Enforces non-root user policies for all pods.
- **`pod-security/no-root-role.yaml`**:
  - Role granting permission to use the PSP.
- **`pod-security/no-root-rolebinding.yaml`**:
  - RoleBinding to apply the PSP to a service account.

### Service Account
- **`pod-security/my-service-account.yaml`**:
  - Service Account linked to the Pod Security Policy.

### Deployment

The `deployment.yaml` file demonstrates how to deploy the secure To-Do application built in Part 2, incorporating security best practices such as:
- Using a `ServiceAccount` for access control.
- Applying a `securityContext` to enforce non-root execution.
- Running the app in a production environment.
- Using a versioned image (`multi-stage-todo-app:1.0.0`) for security and traceability.

#### Build the Image (if not already built)
Ensure the `multi-stage-todo-app` image exists by building it from Part 2:
```bash
docker build -t multi-stage-todo-app:1.0.0 -f 02-multi-stage-builds/Dockerfile .
```

#### Apply the Deployment
Run the following command:
```bash
kubectl apply -f pod-security/deployment.yaml
```

#### Verify the deployment
Check the status of hte pods:
```bash
kubectl get pods -n my-namespace
```


### Network Policies
- **`network-policy/restrict-ingress.yaml`**:
  - NetworkPolicy restricting ingress to specific pods.

## Usage

1. **Apply Configurations**:
   Apply the PSP, Role, RoleBinding, and NetworkPolicy using `kubectl`:
   ```bash
   kubectl apply -f pod-security/no-root-psp.yaml
   kubectl apply -f pod-security/no-root-role.yaml
   kubectl apply -f pod-security/no-root-rolebinding.yaml
   kubectl apply -f network-policy/restrict-ingress.yaml
   ```

2. **Deploy Pods**:
   Ensure deployments use the specified ServiceAccount:
   ```yaml
   spec:
     template:
       spec:
         serviceAccountName: my-service-account
   ```

## Learn More

Visit the [article](https://kelcode.co.uk/securing-your-kubernetes-pods-a-deep-dive/) for detailed explanations of these configurations.