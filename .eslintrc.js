module.exports = {
    "extends": "airbnb",
    "rules": {
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "react/forbid-prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-filename-extension": "off",
        "arrow-parens": "off",
        "arrow-body-style": "off",
        "jsx-a11y/label-has-for": "off",
        "react/no-did-mount-set-state": "off",
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to", "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
        }],
        "object-curly-newline": "off"
    },
    "parser": "babel-eslint",
    "env": {
        "browser": "true",
        "jest": "true"
    },
    "globals": {
        "shallow": true,
        "mount": true,
        "render": true,
        "renderConnectedComponent": true
    }
}