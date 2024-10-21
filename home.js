

// Sample data for demonstration purposes
const sites = [
{ name: "Dormaa LIB", status: "online" },
{ name: "Dormaa 2", status: "0ffline" },
{ name: "Dormaa 3", status: "online" },
// Add more sites here...
];

const onlineSites = sites.filter((site) => site.status === "online").length;
const offlineSites = sites.length - onlineSites;
const networkAvailability = ((onlineSites / sites.length) * 100).toFixed(2);

document.getElementById("online-sites").innerText = `${onlineSites}`;
document.getElementById("offline-sites").innerText = `${offlineSites}`;
document.getElementById("network-availability").innerText = `${networkAvailability}%`;

// Sample alarm data
const alarms = [
{
    siteID: "600535",
    siteName: "Dormaa LIB",
    alarmDescription: "Mains failure",
    power: "Generator",
    severity: "Critical",
    timeOfOccurrence: "2024-10-10 19:30:00",
},
{
    siteID: "600818",
    siteName: "Dormaa 2",
    alarmDescription: "Site not updating",
    power: "Comercial power",
    severity: "Major",
    timeOfOccurrence: "2024-09-31 15:45:00",
},
{
    siteID: "603435",
    siteName: "Dormaa 3_BTF",
    alarmDescription: "Low fuel level",
    power: "Generator",
    severity: "Critical",
    timeOfOccurrence: "2024-10-10 19:31:00",
    },
// Add more alarms here...
];

// Populate alarm list table
alarms.forEach((alarm) => {
let urgency = '';
if (alarm.severity === 'Critical') {
urgency = 'urgent';
} else if (alarm.severity === 'Major') {
urgency = 'normal';
} else {
urgency = 'delay'; // or any other default value
}
const row = document.createElement("tr");
row.innerHTML = `
<td>${alarm.siteID}</td>
<td>${alarm.siteName}</td>
<td>${alarm.timeOfOccurrence}</td>
<td>${alarm.power}</td>
<td>${alarm.alarmDescription}</td>
<td>${alarm.severity}</td>
<td><input type="checkbox" class="urgency-checkbox urgent" checked></td>

`;

 document.getElementById("alarm-list-table").appendChild(row);
// Get the search button and filter div elements


});