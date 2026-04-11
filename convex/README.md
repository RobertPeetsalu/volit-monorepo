# Convex Setup

This project includes the `convex` package and a baseline client provider.

To finish configuring Convex for a real backend deployment:

1. Authenticate with Convex.
2. Create or link a Convex project.
3. Run `pnpm convex dev` to generate the deployment config and `_generated` files.
4. Add the resulting `NEXT_PUBLIC_CONVEX_URL` to local environment variables.

Until that setup is completed, the app will render without connecting to Convex.
