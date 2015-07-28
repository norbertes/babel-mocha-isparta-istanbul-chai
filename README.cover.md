About Coverage Test
====================

```
npm run cover
```

Configuring isparta
====================

Usage: node isparta cover <cmd> [options]

cmd     ES6 js files to cover (using babel)

Options:
   --config <path-to-config>                           the configuration file to use, defaults to .istanbul.yml
   --report <format>                                   report format, defaults to ['lcv']  [lcv]
   --root <path>                                       the root path to look for files to instrument, defaults to .
   -i <include-pattern>, --include <include-pattern>   one or more fileset patterns e.g. '**/*.js'  [**/*.js]
   -v, --verbose                                       verbose mode


Configuring istanbul
====================

 istanbul can be configured globally using a .istanbul.yml YAML file at the
 root of your source tree. Every command also accepts a --config=<config-file>
 argument to customize its location per command. The alternate config file can
 be in YAML, JSON or node.js (exporting the config object).

 The config file currently has four sections for instrumentation, reporting,
 hooks, and checking. Note that certain commands (like `cover`) use information
 from multiple sections.

 Keys in the config file usually correspond to command line parameters with the
 same name. The verbose option for every command shows you the exact
 configuration used. See the api docs for an explanation of each key.

 You only need to specify the keys that you want to override. Your overrides
 will be merged with the default config.

The default configuration is as follows:

verbose: false
instrumentation:
    root: .
    extensions:
        - .js
    default-excludes: true
    excludes: []
    embed-source: false
    variable: __coverage__
    compact: true
    preserve-comments: false
    complete-copy: false
    save-baseline: false
    baseline-file: ./coverage/coverage-baseline.json
    include-all-sources: false
    include-pid: false
reporting:
    print: summary
    reports:
        - lcov
    dir: ./coverage
    watermarks:
        statements: [50, 80]
        lines: [50, 80]
        functions: [50, 80]
        branches: [50, 80]
    report-config:
        clover: {file: clover.xml}
        cobertura: {file: cobertura-coverage.xml}
        json: {file: coverage-final.json}
        json-summary: {file: coverage-summary.json}
        lcovonly: {file: lcov.info}
        teamcity: {file: null}
        text: {file: null, maxCols: 0}
        text-lcov: {file: lcov.info}
        text-summary: {file: null}
hooks:
    hook-run-in-context: false
    post-require-hook: null
    handle-sigint: false
check:
    global:
        statements: 0
        lines: 0
        branches: 0
        functions: 0
        excludes: []
    each:
        statements: 0
        lines: 0
        branches: 0
        functions: 0
        excludes: []


 The `watermarks` section does not have a command line equivalent. It allows
 you to set up low and high watermark percentages for reporting. These are
 honored by all reporters that colorize their output based on low/ medium/ high
 coverage.

 The `reportConfig` section allows you to configure each report format
 independently and has no command-line equivalent either.

 The `check` section configures minimum threshold enforcement for coverage
 results. `global` applies to all files together and `each` on a per-file
 basis. A list of files can be excluded from enforcement relative to root via
 the `exclude` property.
