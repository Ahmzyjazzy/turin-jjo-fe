import React, { createContext, useState } from 'react';
import { featuredCompanies, topThreeRecentOffers } from '../data/store';
export const DataContext = createContext()

const DataContextProvider = ({ children }) => {

    const [recentOffersList] = useState(topThreeRecentOffers);
    const [featuredCompaniesList] = useState(featuredCompanies);

    const contextValues = {
        recentOffersList,
        featuredCompaniesList,
    }

    return (
        <DataContext.Provider value={contextValues} >
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;