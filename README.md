# Northallerton AC website

A lightweight, multi-page static website for GitHub Pages. It uses plain HTML, CSS and JavaScript with no framework, build step, subscription or form vendor.

## Pages

- Home (`index.html`)
- Residential air conditioning (`domestic.html`)
- Commercial air conditioning (`commercial.html`)
- Installation (`installation.html`)
- Maintenance and servicing (`maintenance.html`)
- About (`about.html`)
- Contact (`contact.html`)

## Local preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`.

## Enquiry form

The contact form validates the fields and opens the visitor's default email application with a prefilled message addressed to `info@northallertonac.co.uk`. It does not transmit customer data through the website. A hosted form endpoint would be required for direct website submissions; no external form service has been configured.

## GitHub Pages

The repository already includes a `CNAME` for `northallertonac.co.uk`; retain it and do not change DNS records. The pages are plain static files compatible with GitHub Pages. No Pages setting or DNS change is needed in this development work. Once approved, publish through the repository's existing Pages configuration.

To preview before publication, serve these files locally. Deployment should happen only after approval and a reviewed merge to `main`.

## Hero photograph

`assets/northallerton-home-v2.jpg` is an architectural interior photograph by Caroline Badran, used under the Unsplash License. The photographer is credited on the homepage. It is illustrative stock photography, not a Northallerton AC installation or manufacturer endorsement. [Photo source](https://unsplash.com/photos/modern-living-room-with-air-conditioner-and-decor-BsHycOlU6Bg).

## Business details and claims

The site uses the supplied contact details and certificate-backed credentials: F-Gas company registration FGAS3023445; City & Guilds Level 2 Award in F-Gas and ODS Regulations: Category I, 2079-11; and Panasonic Accredited Installer training certification for RAC and PACi dated 25 November 2025. The supplied MHI accreditation title is shown in the local design as requested; verify the exact individual accreditation, any company authorization and warranty eligibility before publication. No customer reviews or project history are fabricated.


## Credential artwork and publication checks

The exact City & Guilds qualification badge supplied by the user is stored at `assets/city-guilds-fgas-category-i.png`. The F-Gas Register mark is cropped from the supplied company certificate and stored at `assets/fgas-register-logo.png`; the PDF itself is not included in the site. Panasonic and Mitsubishi Heavy Industries are shown as professionally typeset names rather than recreated logos. The supplied Panasonic certificate supports the RAC and PACi training scope.

Before publication, verify current MHI accreditation wording, any required company authorization, and warranty eligibility. The standard MHI five-year warranty is described as parts-only and subject to the manufacturer’s current terms; Loyalty Scheme extensions are stated separately and remain subject to status, purchasing, training, product and approval conditions. Do not publish this branch until the user approves it.
