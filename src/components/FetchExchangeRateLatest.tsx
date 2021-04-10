import React from "react";
import { useState, useEffect } from "react";
import { ExchangeRateHistoricalDateResponse } from "../models/Historical";
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

    const [startDateData, setStartDateData] = useState<
        // ExchangeRateDateRangeResponse
        ExchangeRateHistoricalDateResponse
    >({
        base: "GBP",
        rates: {},
        // start_at: getDateFromDaysAgo(endDateDaysAgo + 1),
        // end_at: getDateFromDaysAgo(endDateDaysAgo)
        date: getDateFromDaysAgo(endDateDaysAgo),
        success: true,
        historical: true
    });

    const [endDateData, setEndDateData] = useState<
        ExchangeRateHistoricalDateResponse
    >({
        base: "GBP",
        rates: {},
        date: getDateFromDaysAgo(endDateDaysAgo + 1),
        success: true,
        historical: true
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

            // Start Date
            // const url = `https://api.exchangeratesapi.io/history?start_at=${startDateIso}&end_at=${endDateIso}&base=${sourceCurrencyIsoCodeNormalised}`;
            const urlStartDate = `https://api.exchangerate.host/${startDateIso}/?base=${sourceCurrencyIsoCodeNormalised}`;
            // https://api.exchangerate.host/2020-04-04&base=GBP

            const responseJsonStartDate = await fetch(urlStartDate);

            // const response: ExchangeRateDateRangeResponse = await responseJson.json();
            const responseStartDate: ExchangeRateHistoricalDateResponse = await responseJsonStartDate.json();

            // End Date
            const urlEndDate = `https://api.exchangerate.host/${endDateIso}/?base=${sourceCurrencyIsoCodeNormalised}`;
            const responseJsonEndDate = await fetch(urlEndDate);
            const responseEndDate: ExchangeRateHistoricalDateResponse = await responseJsonEndDate.json();

            // console.log("fetchExchangeRatesDateRange", "response", response);

            // setStartDateData(responseStartDate);
            // setEndDateData(responseEndDate);

            let dateRangeDataTemp: ExchangeRateDateRangeResponse = {
                base: sourceCurrencyIsoCodeNormalised,
                start_at: responseStartDate.date,
                end_at: responseEndDate.date,
                rates: {
                    [startDateIso]: responseStartDate.rates,
                    [endDateIso]: responseEndDate.rates,
                }
            };

            console.log("dateRangeDataTemp", dateRangeDataTemp);
            setDateRangeData(dateRangeDataTemp);

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

