import React from 'react';

const BetaAlert = () => (
    <div class="alert alert-warning beta-alert" role="alert">
        You are looking at preliminary documentation for secureCodeBox v2 beta. Not what you want? See <a
            href="https://github.com/secureCodeBox/secureCodeBox/blob/master/README.md"
            class="alert-link"
            rel="noreferrer"
            target="_blank">
                latest stable release documentation
        </a>.
    </div>
);

export default BetaAlert;