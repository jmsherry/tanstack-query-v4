# Tanstack Query Demo (v.4)

Docs: <https://tanstack.com/query/latest/docs/react/overview>

Notes:

1. When passing multiple variables to `someMutation.mutate()` the signature is for `.mutate(args, options), so if you want to pass multiple arguments you have to pass them as an object or array **as the first argument** and destructure them.

2. Suspense docs: <https://tanstack.com/query/v4/docs/react/guides/suspense> and article <https://www.bam.tech/article/suspense-and-react-query-make-data-fetching-easy>
