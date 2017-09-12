---
layout: default
title: Development Home
---


# Home page for development section


## Description
This repository documents devices and code created/used during developemnt of Dunedin IoT's LoRa WAN


## Gateways

<a href="../development/gateways/README.md">Pi2 and LoRa mCard AU915 for DunedinIoT (md)</a>



[Loriot Gateway]({{ site.baseurl }}/development/gateways/Loriot-VM-Linux-64-Gateway.html)

[TTN Gateway]({{ site.baseurl }}/development/gateways/iC880a-TTN-Gateway.html)


## Nodes
[Nodes]({{ site.baseurl }}/development/nodes/README.html)

## Sensors
[Room Sensor]({{ site.baseurl }}/development/roomSensor/README.html)

## Server
[TTN Server]({{ site.baseurl }}/development/servers/TTNserver/basicTTNGuide.html)

[LoRa Server]({{ site.baseurl }}/development/servers/LoraserverSetupSteps.html)




-----------------------------------------------------
<span style="color:white;">
  <script language="javascript">
  var x = document.links.length;
  for (i = 0; i < x; i++) {
    var thisHREF = document.links[i].href;
    if (thisHREF.indexOf(window.location.hostname) > -1) thisHREF = thisHREF.replace(".md",".html").replace("/index/","/");
    document.links[i].setAttribute('href', thisHREF);
  }
</span>
</script>


