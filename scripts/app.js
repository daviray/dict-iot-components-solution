var tvscreen;
var light;
var logCon;

document.addEventListener("DOMContentLoaded", () => {
  // initialize connection to the broker

  const pubnub = new PubNub({
    publishKey: "REPLACE_THIS_WITH_YOUR_PUBLISH_KEY",
    subscribeKey: "REPLACE_THIS_WITH_YOUR_SUBSCRIBE_KEY",
    uuid: "mysuperuniqueid",
  });

  pubnub.addListener({
    status: function (statusEvent) {
      if (statusEvent.category === "PNConnectedCategory") {
        printLog("Connected to the broker");
      }
    },
    message: function (msg) {
      console.log(msg);
      //print the message to the logs div
      printLog(JSON.stringify(msg));
      messageHandler(msg);
    },
  });

  pubnub.subscribe({
    channels: ["myhouse/livingroom/bulb", "myhouse/livingroom/tv"],
  });

  tvscreen = document.getElementById("tvscreen");
  light = document.getElementById("light");
  logCon = document.querySelector(".logs");
});

function printLog(text) {
  const value = document.createTextNode(`${text}`);
  const p = document.createElement("p");

  p.appendChild(value);
  logCon.appendChild(p);
}

function messageHandler(msg) {
  switch (msg.channel) {
    case "myhouse/livingroom/bulb":
      toggleBulb(msg.message.value);
      break;
    case "myhouse/livingroom/bulb":
      toggleTV(msg.message.value);
      break;
    default:
      return null;
  }
}

function toggleTV(state) {
  switch (state) {
    case "on":
      tvscreen.style.display = "none";
      break;
    case "off":
      tvscreen.style.display = "initial";
      break;
    default:
      tvscreen.style.display = "initial";
      break;
  }
}

function toggleBulb(state) {
  switch (state) {
    case "on":
      light.style.display = "none";
      break;
    case "off":
      light.style.display = "initial";
      break;
    default:
      light.style.display = "initial";
      break;
  }
}
