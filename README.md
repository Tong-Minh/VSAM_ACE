# VSAM_ACE

This project is in an effort to make the process of pairing bigs and littles together easier for the A.C.E. program in VSAM

A.C.E. is a program where anyone can sign up to be an Anh, Chi/Chanh, or Em. These are Viet honorifics used to address an older brother, a older sister/gender neutral sibling, and a little sibling. These people get paired up, big to little, and do activities with each other throughout the month. The idea is to make it easier for them to pair the bigs and littles together based on a couple of key factors.

Considerations:
- Do they want to be a big/little?
- Do they want anyone specific?
- Do they NOT want anyone specific?
- What are their interests?
- Why do they want to be involved in A.C.E.?
- Extra Details

For now the goal is to create an interface to streamline the application process, similar to a google form, but then on the backend, once the application period is over, generate a listing of ideal pairings based on all of the considerations. This will require editing, but overall, saving the time that would have been taken up by a whole committee handpicking the pairings.

Steps:
- Build out a website with a form that will eventually be hosted on VSAM's website
- Connect the website using Javascript/another web framework to get the applicant replies into a database hosted on AWS
- Whenever an admin chooses (through an admin page), they should be able to close the form/request a spreadsheet with all the automated pairings from the website.