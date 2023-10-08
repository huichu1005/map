# Bio-Hotspots Web
## Introduction
This website has been developed for the 2023 NASA Space Apps Challenge, under the project title **'Exploring Biodiversity Hotspots with Imaging Spectroscopy.'** Our primary objective is to utilize spectral diversity as an indicator of leaf trait variability to uncover biodiversity hotspots among plant species.

The website is divided into four main sections, including an **interactive map**, an **introduction**, an **analysis**, and a **reference** page.

Team Member: HUI-CHU CHEN, YUNG-TSAI LAI, HSIANG TUAN, TZU-WEI YANG

## Run the project
### Publish version
We deploy the website on the environment provided by github, so you can open this product directly through the link below.

[Project : Bio-Hotspots](https://huichu1005.github.io/map/)
### Development version
If you only want to run the project, you can 
click directly on the ```index.html``` file.

## Different pages

### 1. Interactive map
This is the main page. The interactive map includes layer design, which are 2 basemaps ( OpenStreetMap & Satellite ), 3 research analysis layers ( NDVI, NDWI & NDMI ), the final 2 band results ( 381-2492 band z score & 700-1400nm z score ) and 2 optional layers ( hotspots & Cape area ).

### 2. Introduction

The introduction page mainly presents the EMIT data used and our main research area - the Cape area.

### 3. Analysis

The analysis page primarily showcases our progression from the initial raw data, through the pre-processing steps, to the methodologies we employ, ultimately culminating in the presentation of our results.

### 4. Reference

Reference materials include data sources, websites and papers.

## Analysis process code
Regarding our analysis process, the relevant programs will be placed in ```/AnalysisProcess```.

* ```emit_tools.py``` is the module provided by NASA for orthophoto processing.

* ```Demo-checkpoint.ipynb``` is the code for our data analysis.

