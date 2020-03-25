import React from "react";
import { useState, useEffect } from "react";
import ExchangeRatesDateRange, { ExchangeRateDateRangeResponse } from "./ExchangeRates";
import ExchangeRatesForm from "./ExchangeRatesForm";

interface FetchExchangeRateLatestProps {
    sourceCurrencyIsoCode: string;
    endDateDaysAgo?: number
}

const FetchExchangeRateLatest = (props: FetchExchangeRateLatestProps) => {

    const getDateFromDaysAgo = (daysAgo: number) => {
        const ONE_DAY = 1000 * 60 * 60 * 24;

        const daysInMilliseconds = ONE_DAY * daysAgo;

        const result = new Date((new Date()).valueOf() - daysInMilliseconds);

        return result;
    }

    const [endDateDaysAgo] = useState(props.endDateDaysAgo ?? 0);

    const [dateRangeData, setDateRangeData] = useState<
        ExchangeRateDateRangeResponse
    >({
        base: "GBP",
        rates: {},
        start_at: getDateFromDaysAgo(endDateDaysAgo + 1),
        end_at: getDateFromDaysAgo(endDateDaysAgo)
    });

    const [loading, setLoading] = useState(true);

    const [
        sourceCurrencyIsoCodeNormalised,
        setSourceCurrencyIsoCodeNormalised
    ] = useState(props.sourceCurrencyIsoCode || "GBP");

    const handleSourceCurrencyChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        setSourceCurrencyIsoCodeNormalised(event.target.value as string);
    };

    // async function fetchLatestExchangeRates() {
    //     const url = `https://api.exchangeratesapi.io/latest?base=${sourceCurrencyIsoCodeNormalised}`;

    //     const responseJson = await fetch(url);

    //     const response: ExchangeRateLatestResponse = await responseJson.json();

    //     setData(response);
    //     setLoading(false);
    // }

    useEffect(() => {
        // fetchLatestExchangeRates();
        // fetchExchangeRatesDateRange();
        const fetchExchangeRatesDateRange = async () => {
            // console.log("fetchExchangeRatesDateRange");

            const startDateIso = getDateFromDaysAgo(endDateDaysAgo + 1).toISOString().split("T")[0];
            const endDateIso = getDateFromDaysAgo(endDateDaysAgo).toISOString().split("T")[0];

            // console.log(`startDateIso = ${startDateIso}`);
            // console.log(`endDateIso = ${endDateIso}`);

            const url = `https://api.exchangeratesapi.io/history?start_at=${startDateIso}&end_at=${endDateIso}&base=${sourceCurrencyIsoCodeNormalised}`;

            const responseJson = await fetch(url);

            const response: ExchangeRateDateRangeResponse = await responseJson.json();

            // console.log("fetchExchangeRatesDateRange", "response", response);

            setDateRangeData(response);
            setLoading(false);
        };

        fetchExchangeRatesDateRange();

    }, [sourceCurrencyIsoCodeNormalised, endDateDaysAgo]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                    <div>
                        {dateRangeData && (
                            <>
                                <ExchangeRatesForm
                                    sourceCurrencyIsoCode={sourceCurrencyIsoCodeNormalised}
                                    handleSourceCurrencyChange={handleSourceCurrencyChange}
                                />

                                <hr></hr>

                                <ExchangeRatesDateRange data={dateRangeData} />
                            </>
                        )}
                    </div>
                )}
        </div>
    );
};

export default FetchExchangeRateLatest;

