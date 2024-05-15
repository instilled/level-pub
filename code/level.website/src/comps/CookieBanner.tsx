import * as React from 'react';
import {useLocation} from '@reach/router';
import {initializeAndTrack} from '@mobile-reality/gatsby-plugin-gdpr-cookies';

function isBrowser() {
    return typeof window !== 'undefined';
}

function getValue(key: string, defaultValue: unknown) {
    return isBrowser() && window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key) || "")
        : defaultValue;
}

function setValue(key: string, value: unknown) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function useStickyState(defaultValue: unknown, key: string) {
    const [value, setter] = React.useState(() => {
        return getValue(key, defaultValue);
    });

    React.useEffect(() => {
        setValue(key, value);
    }, [key, value]);

    return [value, setter];
}

const CookieBanner = () => {
    const location = useLocation();
    if (isBrowser()) {
        initializeAndTrack(location);
    }

    const [bannerHidden, setBannerHidden] = useStickyState(
        false,
        'consentCookieHidden',
    );

    const EnableAnalytics = () => {
        document.cookie = 'level-ga-analytics=true';
        setBannerHidden(true);
    };

    return (
        <>
            {!bannerHidden && (
                <div className="absolute right-40 bottom-20 rounded-xl bg-neutral-800 p-2 text-xs">
                  <span>
                    We use cookies to personalize content and analyze our
                    traffic.
                  </span>
                    <span className="ml-3"><button onClick={EnableAnalytics}>Accept</button></span>
                </div>
            )}
        </>
    );
};

export default CookieBanner;