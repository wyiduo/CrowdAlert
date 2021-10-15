# CrowdAlert

## Using the source code

You will need your own API key for the Google Maps API.

1. Open index.html and use Ctrl-F to find "YOUR_API_KEY".
2. The find tool should navigate to the following line.
```
    <script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initAutocomplete&libraries=places&v=weekly"
      defer
    ></script>
```
3. Replace "YOUR_API_KEY" with your own Google Maps API key.

# About

CrowdAlert is a service that uses user input and GPS data to determine user congestion in a user-specified area.

When COVID-19 restrictions started to lift, there was a sudden influx of commerce at brick and mortar locations. Google Maps at the time had an amazing feature that allowed users to view traffic congestion. The idea for CrowdAlert was to use a similar technology to show congestion in a store or business. The idea was that information about human congestion could help people find the right time and place to shop by avoiding places with a high volume of people.

CrowdAlert was submitted to the Suns Out Hacks Out 2020 hackathon. More information, demo, design, and minimum product available at https://devpost.com/software/crowdalert.

&nbsp;

**![Demo and design of CrowdAlert](https://www.youtube.com/watch?v=-ZiAOcCKW3Q)**

**![Minimum product](https://crowdalert.elianawang.repl.co/)**

## Credits

Jeffrey Lin, developer

Eliana Wang, developer

Janet Choi, developer and designer

Yiduo Wang, designer
