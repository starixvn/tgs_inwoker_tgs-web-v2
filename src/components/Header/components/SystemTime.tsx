import { useState, useEffect } from "react";
import moment from "moment-timezone";
import { BRAND_CODE } from "@/types";
import { brandConfig } from "@/lib";


export const SystemTime = () => {
    /**
     * @todo 這裡的 brand code 是固定的，要改成動態的
     */
    const brandCode = BRAND_CODE.GPI;

    const {timeZone} = brandConfig[brandCode];
    const formatTimeZone = moment().tz(timeZone);

    const [systemTime, setSystemTime] = useState(
        formatTimeZone.format("YYYY-MM-DD HH:mm:ss")
    );
    
    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment().tz(timeZone);
            setSystemTime(now.format("YYYY-MM-DD HH:mm:ss"));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <div className="text-header-text">
            {`GMT${formatTimeZone.format("Z")} ${systemTime}`}
        </div>
    );
};

