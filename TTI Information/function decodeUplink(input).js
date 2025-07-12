var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;
var telemetry = {};
var first6 = deviceName.substring(0,6); // extract the necessary number of char from device name
switch (first6) {                       // prepare the right telemetry
  case "t":                             //therm-a-office-adeunis-comfort2 && therm-b-office-adeunis-comfort2
    telemetry = {temperature: data.uplink_message.decoded_payload.temperature, humidity: data.uplink_message.decoded_payload.humidity, low_bat: data.uplink_message.decoded_payload.low_bat};
    break;
  case "e":                           //ext-therm-fridge-adeunis-temp
    telemetry = {temperature: data.uplink_message.decoded_payload.temperature, low_bat: data.uplink_message.decoded_payload.low_bat};
    break;   
  case "m":                           //modbus-b-adeunis
    telemetry = {vr: data.uplink_message.decoded_payload.vr, vs: data.uplink_message.decoded_payload.vs, vt: data.uplink_message.decoded_payload.vt, e_tot: data.uplink_message.decoded_payload.e_tot, p_tot: data.uplink_message.decoded_payload.p_tot};
    break;
};
var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: telemetry
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;