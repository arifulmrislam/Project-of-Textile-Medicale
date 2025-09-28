# Textile Medicale Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Issues](https://img.shields.io/github/issues/arifulmrislam/Project-of-Textile-Medicale)](https://github.com/arifulmrislam/Project-of-Textile-Medicale/issues)  
[![Forks](https://img.shields.io/github/forks/arifulmrislam/Project-of-Textile-Medicale)](https://github.com/arifulmrislam/Project-of-Textile-Medicale/network)  
[![Stars](https://img.shields.io/github/stars/arifulmrislam/Project-of-Textile-Medicale)](https://github.com/arifulmrislam/Project-of-Textile-Medicale/stargazers)  

---

## 🚀 Project Overview

The **Textile Medicale Project** integrates both hardware and software components to monitor and visualize sensor data in a textile/medical environment. In summary:

- **Software side**: Uses ThingsBoard Cloud + ThingsBoard Edge (SaaS) to deploy an edge instance, link it to the cloud, and manage telemetry pipelines.  
- **Hardware / IoT side**: Collects data (e.g. from energy meters, temperature sensors, dry-contact devices) via Node-RED over Modbus RTU and forwards it to the edge instance, eventually synchronized with ThingsBoard Cloud.  
- **User interface & dashboards**: In the cloud environment you design dashboards to visualize telemetry, alerts, and device states.

This architecture allows resilient edge-to-cloud telemetry flows and visualization in industrial IoT / smart textile setups.

---

## 📦 Architecture & Workflow

Here is the high-level flow:

1. **ThingsBoard Cloud & Edge Integration**  
   - Start with a ThingsBoard Cloud instance  
   - Enable the Edge extension via license activation  
   - Retrieve `edgeKey` and `edgeSecretKey` for your edge instance  
   - Install and configure the ThingsBoard Edge (SaaS) using those credentials  

2. **Edge Configuration & Access**  
   - Use the secret key to finalize edge setup  
   - Access the Edge web UI via its IP (HTTP/HTTPS)  
   - Log in using your cloud (ThingsBoard) credentials  

3. **Device Definition & Telemetry Pipeline**  
   - In ThingsBoard Cloud, create *Device Groups*  
   - On the hardware side (Node-RED), connect to energy meters via Modbus RTU  
   - Format and forward telemetry to ThingsBoard Edge  

4. **Cloud Sync & Dashboarding**  
   - Once telemetry arrives at Edge, sync it to ThingsBoard Cloud  
   - In the cloud UI, create dashboards, widgets, and visualizations  
   - Monitor real-time data, device status, and alerts  

---

## 🧩 Devices & Gateway

### Devices (Sensors / Actuators)

| Device Name | Type / Role |
|-------------|-------------|
| `temp-a-adeunis-comfort2` | Temperature / comfort sensor (Adeunis) |
| `ext-therm-fridge-adeunis-temp` | External fridge temperature sensor |
| `modbus-a-adeunis` | Modbus interface / translator (Channel A) |
| `modbus-b-adeunis` | Modbus interface / translator (Channel B) |
| `therm-b-office-adeunis-comfort2` | Secondary temperature sensor in office |
| `contact-b-adeunis-drycontact` | Dry-contact input (channel B) |
| `contact-a-adeunis-drycontact` | Dry-contact input (channel A) |

### Gateway

- **MikroTik RBwAPR-2nD** — acting as the network gateway (edge connectivity, bridging, routing)

## Program

| Devices | Modbus Setup |
|-------|-----------|
| ![Devices]([https://github.com/arifulmrislam/CLIC-APP/blob/main/clients/src/assets/admin-login.png](https://github.com/arifulmrislam/Project-of-Textile-Medicale/blob/main/IMG/screenshot-from-node-red1.png)) | ![Modbus setup](https://github.com/arifulmrislam/Project-of-Textile-Medicale/blob/main/IMG/screenshot-from-node-red2.png) |

| Members | Pools |
|---------|-------|
| ![Members](https://github.com/arifulmrislam/CLIC-APP/blob/main/clients/src/assets/member-list.png) | ![Pools](https://github.com/arifulmrislam/CLIC-APP/blob/main/clients/src/assets/pool-list.png) |

| Create | Edit |
|---------|-------|
| ![Create](https://github.com/arifulmrislam/CLIC-APP/blob/main/clients/src/assets/create-pool.png) | ![Edit](https://github.com/arifulmrislam/CLIC-APP/blob/main/clients/src/assets/edit-pool.png) |
---

---

## 🛠️ Installation & Setup Guide

Below is a consolidated setup outline. You should provide more detailed scripts or commands in separate documents or folders (e.g. `/docs` or `/deploy`).

1. **ThingsBoard Cloud Setup**  
   - Sign in / sign up at [ThingsBoard Cloud](https://thingsboard.cloud)  
   - Activate Edge extension via the activation link or token:  
     ```
     https://thingsboard.cloud/api/noauth/activate?activateToken=oOgwVsL8pfzGGVDYuA5YOI8pKGaynk
     ```  
   - Obtain `edgeKey` & `edgeSecretKey`

2. **Deploy ThingsBoard Edge**  
   - Install the Edge software (Docker, Debian package, or other)  
   - Input `edgeKey` & `edgeSecretKey` in the edge config  
   - Start the edge service  
   - Access the Edge Web UI via `http://<edge-ip>:<port>`  
   - Log in with your cloud credentials  

3. **Node-RED & Modbus Setup**  
   - In Node-RED, install Modbus nodes  
   - Configure RTU (serial port, baud, parity, slave IDs, registers)  
   - Read telemetry from energy meters / sensors  
   - Format telemetry JSON and POST / MQTT / RPC to ThingsBoard Edge  

4. **ThingsBoard Cloud Dashboarding**  
   - In the cloud UI, define devices (or import from Edge sync)  
   - Assign devices to groups / home dashboards  
   - Create widgets (charts, gauges, status indicators)  
   - Build dashboards for monitoring  

5. **Testing & Validation**  
   - Verify telemetry reaches Edge instance  
   - Confirm that telemetry is replicated to Cloud  
   - Confirm dashboards show correct values  
   - Test alerts, threshold rules, notifications (if used)  

---

## 📁 Repository Structure (suggested)

src/
- ├── docs/
- │ ├── edge_installation.md
- │ ├── node_red_flow.json
- │ ├── modbus_mappings.md
- │ └── dashboard_examples.md
- ├── src/ # any scripts, drivers, utilities
- ├── flows/ # Node-RED flow JSON files
- ├── config/ # config templates (edge, modbus, credentials)
- ├── images/ # screenshots, architecture diagrams
- ├── README.md # this file
- └── LICENSE
---

## ✅ Features & Benefits

- **Edge-to-Cloud Synchronization** — robust telemetry pipeline from sensors through Edge to ThingsBoard Cloud  
- **Scalable & Modular** — you can add more sensors, device types, or gateways  
- **Real-time Dashboards** — visualize temperature, energy usage, contact states  
- **Open & Extensible** — node-based flows (Node-RED), standard protocols (Modbus), open UI (ThingsBoard)  

---

## 🧪 Usage Example

Here’s a quick example of how Node-RED might send data to ThingsBoard Edge (pseudocode / JSON):
That payload could be posted via HTTP/MQTT to the Edge API endpoint (e.g. `/api/v1/<edgeToken>/telemetry`) and then is forwarded to the cloud automatically.

```json
{
  "device": "temp-a-adeunis",
  "ts": 1630000000000,
  "values": {
    "temperature": 24.8,
    "humidity": 45.2
  }
}
```

---

## ⚠️ Caveats & Tips

- Ensure time synchronization (NTP) on Edge / gateway to avoid timestamp drift

- Validate Modbus register mappings carefully — off-by-one errors are common

- Start with minimal telemetry / devices, verify pipeline, then scale

- Use secure connections (TLS, token auth) especially when exposing edge/cloud endpoints

- Monitor logs on edge / cloud to debug connectivity / errors

---

## 🧭 Next Steps & Enhancements
- Add more sensor types (humidity, pressure, vibration, etc.)

- Implement alerting, anomaly detection, rule engine

- Build mobile / web apps to access dashboards

- Add over-the-air (OTA) updates for firmware / edge software

- Integrate with other platforms (e.g. MQTT brokers, external databases)

---

## 🙏 Acknowledgements & References

- 
- `ThingsBoard Documentation:` [ThingsBoard Documentation](https://thingsboard.io/docs/)
- `Node-RED community & modbus nodes:` [Node-RED community & modbus nodes](https://discourse.nodered.org/)
- MikroTik RouterOS & wireless gateway setup guides
  
---
