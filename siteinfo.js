const Sitename = document.getElementById('sitename');
const Region = document.getElementById('region');
const Siteid = document.getElementById('siteid');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    const sitename = Sitename.value;
    const region = Region.value;
    const siteid = Siteid.value;
    console.log(`Site Name: ${sitename}`);
    console.log(`Region: ${region}`);
    console.log(`Site ID: ${siteid}`);
    if (sitename == "DORMAA LIB" && region == "Bono region" && siteid == "600535" || sitename == "DORMAA LIB" || siteid == "600535") {
        window.location.href = "sitedetails.html";
    }else{
        if (sitename == "DORMAA 2" && region == "Bono region" && siteid == "600818" || sitename == "DORMAA 2" || siteid == "600818") {
            window.location.href = "sitedetails.html";
        }else{
            if (sitename == "DORMAA 3_BTF" && region == "Bono region" && siteid == "603435" || sitename == "DORMAA 3_BTF" || siteid == "603435") {
                window.location.href = "sitedetails.html";
            }else{
                alert("invalid site details");
            }
        }
    }
    
  });
  const sitedetails = [

   {    siteID: "600535",
        siteName: "Dormaa LIB",
        sitedetailDescription: "Mains failure",
        power: "Generator",
        severity: "Critical",
        timeOfOccurrence: "2024-10-10 19:30:00",
    },
    // {
    //     siteID: "600818",
    //     siteName: "Dormaa 2",
    //     sitedetailDescription: "Site not updating",
    //     power: "Comercial power",
    //     severity: "Major",
    //     timeOfOccurrence: "2024-09-31 15:45:00",
    // },
    // {
    //     siteID: "603435",
    //     siteName: "Dormaa 3_BTF",
    //     alarmDescription: "Low fuel level",
    //     power: "Generator",
    //     severity: "Critical",
    //     timeOfOccurrence: "2024-10-10 19:31:00",
    //     },
    // Add more sitedetails here...
    ];
    const siteid = sitedetail.filter((siteID))

    document.getElementById("sn").innerText = `${siteid}`;
    // info.forEach((sitedetail) => {
    //     const row = document.createElement("tr");
    //     row.innerHTML = `
    //     <td>${sitedetail.siteID}</td>
    //     <td>${sitedetail.siteName}</td>
    //     <td>${sitedetail.timeOfOccurrence}</td>
    //     <td>${sitedetail.power}</td>
    //     <td>${sitedetail.alarmDescription}</td>
    //     <td>${sitedetail.severity}</td>
    //     `;

    //     document.getElementById("sitedetail-list-table").appendChild(row);
    // });


    // @media (max-width: 479px) {
    //     /* Mobile Styles */
    //     .main{
    //       width: 100%;
    //     }
    //     h2{
    //       font-size: 1.5em;
    //     }
    //     img{
    //       max-width: 40px;
    //     }
    //   .lgname{
    //     font-size: 1.1em;
    //     letter-spacing: normal;
    //   }
    //     .headbar {
    //       flex-direction: column;
    //       align-items: stretch;
    //     }
    //     .logo {
    //       width: 18%;
    //     }
    //     .headname {
    //       font-size: 1.8em;
    //     }
        
    //     .dashboard {
    //       flex-direction: column;
    //     }
    //     .info {
    //       flex-direction: row;
    //       align-items: center;
    //     }
    //   }
    //   @media (min-width: 480px) and (max-width: 767px) {
    //     /* Tablet Styles */
    //     .main{
    //       width: 100%;
    //     }
    //     .headbar {
    //       flex-direction: row;
    //     }
    //     .logo {
    //       width: 20%;
    //     }
    //     .headname {
    //       font-size: 2em;
    //     }
    //   }
      
    //   @media (min-width: 768px) and (max-width: 1199px) {
    //     /* Desktop Styles */
    //     .main{
    //       width: 100%;
    //     }
    //     .headbar {
    //       flex-direction: row;
    //   }
    // }        