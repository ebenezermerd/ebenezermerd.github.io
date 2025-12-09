# Data Directory

This directory contains all centrally managed data for the portfolio application. All components import from these files for consistent data management.

## File Structure

### `/data/index.ts`
Central export file - import all data from here using:
```typescript
import { heroData, featuredProjects, services, ... } from '../data';
```

### `/data/hero.ts`
**Exports:**
- `heroData` - Hero section content (name, title, description)

**Used by:**
- `/imports/BodyAntialiased.tsx`

### `/data/projects.ts`
**Exports:**
- `Project` interface - TypeScript type for project objects
- `featuredProjects` - Array of 3 featured projects
- `curatedWorks` - Array of 9 curated work projects
- `allProjects` - Combined array of all projects
- `projectCategories` - Filter categories for project filtering

**Used by:**
- `/components/FeaturedProjects.tsx`
- `/components/CuratedWorks.tsx`
- `/components/ProjectDetailsDialog.tsx`

### `/data/services.ts`
**Exports:**
- `Service` interface - TypeScript type for service objects
- `services` - Array of 6 service offerings
- `processSteps` - Array of 4 process steps for Services section

**Used by:**
- `/components/ServicesSection.tsx`

### `/data/navigation.ts`
**Exports:**
- `NavLink` interface - TypeScript type for navigation links
- `navLinks` - Array of navigation menu items
- `brandName` - Application brand name ("EPNICS")

**Used by:**
- `/imports/BodyAntialiased.tsx`

### `/data/projectDetails.ts`
**Exports:**
- `processStepsTimeline` - Array of 6 timeline steps for project details
- `designImages` - Array of 3 design showcase images

**Used by:**
- `/components/ProjectDetailsDialog.tsx`

## Benefits of Centralized Data Management

✅ **Single Source of Truth** - All data in one location
✅ **Easy Updates** - Change data in one place, reflected everywhere
✅ **Type Safety** - TypeScript interfaces ensure data consistency
✅ **Better Organization** - Separated by concern (projects, services, hero, etc.)
✅ **Scalability** - Easy to add new data or modify existing data
✅ **Maintainability** - Clear structure for future developers

## How to Update Data

1. Navigate to the appropriate file in `/data` directory
2. Update the data directly in the exported array or object
3. All components using that data will automatically reflect the changes
4. No need to modify component files unless structure changes

## Example Usage

```typescript
// In any component
import { featuredProjects, services, heroData } from '../data';

export default function MyComponent() {
  return (
    <div>
      <h1>{heroData.name}</h1>
      {featuredProjects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
}
```
