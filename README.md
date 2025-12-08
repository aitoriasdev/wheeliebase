# Wheeliebase: The Ultimate Motorcycle Spec Dashboard

## Overview

**Wheeliebase** is a modern, fast, and responsive web application built with **Next.js** that allows users to easily search, view, and compare detailed specifications for motorcycles across various manufacturers and models.

This project consumes data from an external Motorcycle API to provide a seamless data exploration experience.

## Features

- **Fast Search:** Quickly find models by manufacturer, year, or name.
- **Detailed Specs:** View comprehensive data on engine, chassis, dimensions, and performance.
- **Side-by-Side Comparison:** Compare multiple models to help find the perfect bike.
- **Modern UI:** Built using Next.js for superior performance and user experience.

## Getting Started

Follow these steps to get a local copy up and running for development and testing.

### Prerequisites

You need to have **Node.js** and **npm** (or yarn/pnpm) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone git@github-aitoriasdev:aitoriasdev/motorcycle-app.git
    cd motorcycle-app
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    ```
3.  Set up your Environment Variables.
    - Create a file named `.env.local` in the root directory.
    - Add your external Motorcycle API key/URL (e.g., `NEXT_PUBLIC_MOTO_API_URL=...`).

### Running the Application

Start the development server:

```bash
npm run dev
# or yarn dev
```
