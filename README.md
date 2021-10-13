# rush-repro-build-dir-gitignore
Repo to show a reproduction of a potential bug in Rush deploy with .gitignore

Reporters:
  - Craig Palermo (Priceline)
  - Steven Dalonzo (Priceline)

## Issue description

Files and folders included in a `.gitignore` file in a given project are not included in that project's `common/deploy/<project>` directory when using `rush deploy`. This only happens with project-specific `.gitignore` files. The global `.gitignore` file behaves as expected; specified paths are ignored by Git, but still included in the deploy directory.

## Steps to reproduce

1. Setup: run `rush install` and `rush build`
2. Deploy the sample app: run `rush deploy`
3. Observe that there's no `build` directory in `common/deploy/sample-deployed-app`, as we'd expect to see because the directory `apps/sample-deployed-app/build` exists.
4. Delete `apps/sample-deployed-app/.gitignore` and run `rush deploy` again.
5. Observe that there is now a `common/deploy/sample-deployed-app/build` directory.