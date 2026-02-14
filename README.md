# buddhi_vetta

# Fleet Maintenance Prediction & Agentic Management System

## Project Introduction

Fleet management plays a crucial role in transportation, logistics, and large-scale vehicle operations. Unexpected breakdowns can lead to:

- Increased operational costs  
- Delivery delays  
- Safety risks  
- Reduced fleet efficiency  

This project focuses on building an AI-driven Fleet Maintenance System that predicts vehicle maintenance risks using historical vehicle data and extends into an Agentic AI Assistant capable of generating structured and actionable maintenance recommendations.

Our goal is to shift from reactive maintenance to predictive and intelligent fleet management.

---

# What We Are Building

This project is developed in two major stages:

---

# Stage 1 — Machine Learning-Based Maintenance Prediction

## Objective

Develop a supervised learning system that:

- Analyzes vehicle usage data  
- Predicts maintenance risk or failure probability  
- Identifies contributing risk factors  
- Displays results through an interactive interface  

## Problem Being Solved

Traditional fleet maintenance often depends on:

- Manual tracking  
- Fixed servicing schedules  
- Reactive repairs after failures  

We improve this process by:

- Using historical mileage, engine hours, and fault records  
- Learning patterns associated with breakdowns  
- Automatically predicting vehicles at high risk  

## System Flow

Vehicle Dataset (CSV)  
        ↓  
Data Cleaning & Preprocessing  
        ↓  
Feature Engineering  
        ↓  
ML Model Training  
        ↓  
Maintenance Risk Prediction  
        ↓  
User Interface Display  

## Expected Output

- Maintenance risk level  
- Probability score  
- Key contributing features  
- Basic interpretability insights  

This stage forms the predictive backbone of the entire system.

---

# Stage 2 — Agentic AI Fleet Management Assistant

## Objective

Extend the predictive model into an intelligent assistant that:

- Interprets vehicle health predictions  
- Generates structured maintenance recommendations  
- Suggests servicing timelines  
- Provides operational insights  
- Handles incomplete or uncertain data gracefully  

## Why Agentic AI?

Prediction alone is insufficient for real-world use.

Fleet managers require:

- Actionable recommendations  
- Service scheduling guidance  
- Clear explanations  
- Structured maintenance plans  

The agent layer adds reasoning capabilities on top of the ML prediction model.

---

## Agent Workflow

Vehicle Data  
      ↓  
Maintenance Risk Prediction  
      ↓  
Agent Reasoning Layer  
      ↓  
Maintenance Plan Generation  
      ↓  
Structured Fleet Report  

---

## Structured Output Includes

- Vehicle health summary  
- Maintenance risk assessment  
- Recommended service actions  
- Suggested timelines  
- Operational safety disclaimer  

This transforms raw predictions into practical fleet management guidance.

---

# Technical Overview

The project integrates multiple components:

## Machine Learning Layer

- Data preprocessing  
- Feature engineering  
- Supervised learning models  
- Model evaluation  

## Agent Layer

- LLM-based reasoning  
- Prompt strategies  
- Optional retrieval-based augmentation  
- Structured output generation  

## User Interface

- Upload vehicle dataset  
- Display predictions  
- Display structured maintenance report  

---

# Dataset

The system uses a publicly available vehicle maintenance dataset containing:

- Mileage  
- Engine hours  
- Fault codes  
- Service history  
- Repair records  
- Usage patterns  

This enables simulation of real-world fleet management scenarios.

---

# Project Vision

By the end of this project, we aim to deliver:

- A predictive maintenance system  
- An intelligent fleet advisory assistant  
- A fully deployed public application  
- A scalable architecture adaptable to real fleet environments  

---

# Repository Structure

Fleet_maintainance_prediction/  
│  
├── backend/           # ML logic and processing  
├── frontend/          # User interface  
├── models/            # Trained models  
├── notebooks/         # EDA and experimentation  
├── data/              # Dataset  
├── app.py / server    # Application entry point  
└── README.md  

---

# What This Project Demonstrates

- Applied Machine Learning  
- Predictive Maintenance Modeling  
- Explainable AI principles  
- Agentic AI system design  
- Practical fleet analytics implementation  
- End-to-end deployment pipeline  

---

# Conclusion

This repository documents the complete development of a predictive and intelligent fleet maintenance system — from raw vehicle data to structured, actionable fleet management recommendations.

The system represents a transition from:

Data → Prediction → Reasoning → Actionable Insight
