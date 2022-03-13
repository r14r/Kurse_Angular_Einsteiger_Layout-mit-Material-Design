#

## Instal Node

## Install Angular

```bash
npm -g install @angular/cli
```

## Prepare Base App

```bash
ng new app --routing --skip-git --style scss --strict
```

Generate Homepage

```bash
cd src/app
ng g c pages/home
```

Change ```app.component.html```

```html
<router-outlet></router-outlet>
```

Change app-routing.module.ts

```javascriptimport { HomeComponent } from './pages/home/component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
```

## Add Material Design

```bash
npm install @angular/material @angular/cdk
```

### material.module.ts

Create module ```app/material.module.ts```

```typescript

```

### app.module.ts

Add to ``app/app.module.ts```

```typescript
@NgModule({
  ...
  imports: [
    ...
    MaterialModule,

```

### anguar.json

Add colortheme  

```
            "styles": [
              "src/styles.scss",
              "./node_modules/@angular/material/prebuilt-themes/purple-green.css"
            ],
```

### Add CSS for Material Icons

``ìndex.html````

```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

### Add sample code

Edit ```app/pages/home.component.ts```

```html
<h3>Material Design</h3>

<button mat-icon-button><mat-icon>more_vert</mat-icon></button>
<button mat-icon-button color="primary"><mat-icon>home</mat-icon></button>
<button mat-icon-button color="accent"><mat-icon>menu</mat-icon></button>
<button mat-icon-button color="warn"><mat-icon>favorite</mat-icon></button>
<button mat-icon-button disabled><mat-icon>open_in_new</mat-icon></button>
<button mat-fab color="primary"><mat-icon>delete</mat-icon></button>
<button mat-fab color="accent"><mat-icon>bookmark</mat-icon></button>
<button mat-fab color="warn"><mat-icon>home</mat-icon></button>
<button mat-fab disabled><mat-icon>favorite</mat-icon></button>
```
