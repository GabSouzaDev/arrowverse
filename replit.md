# Arrowverse Checklist Application

## Overview

This is a full-stack React application for tracking progress through the Arrowverse TV series in chronological order. The application allows users to check off episodes as they watch them, filter content by year and series, and export their progress. It's built with a modern React frontend using shadcn/ui components, an Express.js backend, and PostgreSQL with Drizzle ORM for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with a custom design system using CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state and local React state for UI interactions
- **Routing**: Wouter for lightweight client-side routing
- **Data Storage**: Browser localStorage for persisting user progress and preferences

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Development Server**: Vite middleware integration for hot module replacement in development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be extended for database persistence

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless driver for PostgreSQL connections
- **Local Storage**: Browser localStorage for client-side data persistence of user progress

### Authentication and Authorization
- **Current State**: Basic user schema defined with username/password fields
- **Session Management**: connect-pg-simple for PostgreSQL-backed session storage (configured but not implemented)
- **Security**: Basic user creation and lookup methods defined in storage interface

### External Dependencies
- **Database Provider**: Neon Database (PostgreSQL-compatible serverless database)
- **UI Components**: Extensive use of Radix UI primitives for accessibility
- **Development Tools**: 
  - Replit-specific plugins for development environment integration
  - ESBuild for production bundling
  - PostCSS with Autoprefixer for CSS processing
- **Utilities**:
  - date-fns for date formatting and manipulation
  - clsx and tailwind-merge for conditional styling
  - zod for runtime type validation with drizzle-zod integration

## External Dependencies

### Third-party Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Replit Platform**: Development environment with custom plugins and error handling

### Key Libraries and Frameworks
- **Frontend**: React, Vite, Wouter, TanStack Query, shadcn/ui, Tailwind CSS
- **Backend**: Express.js, Drizzle ORM, connect-pg-simple
- **Database**: PostgreSQL via @neondatabase/serverless driver
- **Development**: TypeScript, ESBuild, PostCSS, Replit development tools
- **UI/UX**: Radix UI primitives, Lucide React icons, class-variance-authority for component variants

### Build and Development Tools
- **Package Manager**: npm with lockfile version 3
- **Build System**: Vite for frontend, ESBuild for backend bundling
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Development Server**: Express with Vite middleware for HMR