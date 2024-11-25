# Trivy Scan Results

This folder contains example outputs from Trivy, a vulnerability scanning tool for container images.

---

## Files

- `scan-summary.txt`: A simple text summary of vulnerabilities in the `secure-node-app` image.
- `scan-detailed.json`: Detailed JSON output from Trivy, showing vulnerability descriptions, severities, and fixes.

---

## How to Generate Your Own Scans

1. **Run Trivy on the Image**:
   ```bash
   trivy image secure-node-app
   ```

2. **Export Results**:
   - Text format:
     ```bash
     trivy image secure-node-app > scan-summary.txt
     ```
   - JSON format:
     ```bash
     trivy image secure-node-app --format json > scan-detailed.json
     ```

---

## Summary of Results

- **Summary**:
  - **Low**: 2
  - **High**: 1
  - **Critical**: 0

- **Notable Vulnerabilities**:
  - **libcrypto3**:
    - CVE-2024-9143: Out-of-bounds memory access in OpenSSL.
    - [Details](https://avd.aquasec.com/nvd/cve-2024-9143)
  - **cross-spawn**:
    - CVE-2024-21538: Regular Expression Denial of Service (ReDoS).
    - [Details](https://avd.aquasec.com/nvd/cve-2024-21538)

---

## Learn More

Visit the [Trivy Documentation](https://aquasecurity.github.io/trivy/) for more information.