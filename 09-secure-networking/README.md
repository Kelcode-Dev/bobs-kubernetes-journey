# Kubernetes Network Policies

This folder contains examples of Network Policies to control traffic flow in Kubernetes, enhancing security and isolating workloads.

## Files

### Network Policies
1. **`default-deny.yaml`**: Default deny-all policy for both ingress and egress
2. **`api-access.yaml`**: Restricts egress from `frontend` Pods to an external API's IP range
3. **`backend-policy.yaml`**: Allows only `frontend` Pods to communicate with `backend` Pods
4. **`production-isolation.yaml`**: Isolates Pods in the `production` namespace from other namespaces
5. **`database-access.yaml`**: Blocks all external traffic to `database` Pods

## Instructions

### Apply the Network Policies
Run the following commands to apply the policies:
```bash
kubectl apply -f network-policies/default-deny.yaml
kubectl apply -f network-policies/api-access.yaml
kubectl apply -f network-policies/backend-policy.yaml
kubectl apply -f network-policies/production-isolation.yaml
kubectl apply -f network-policies/database-access.yaml
```

### Verify Policies
Describe the applied policies:
```bash
kubectl describe networkpolicy <policy-name>
```

## Learn More

Visit the [article](https://kelcode.co.uk/kubernetes-secure-networking-policies/) for detailed explanations of these configurations.
