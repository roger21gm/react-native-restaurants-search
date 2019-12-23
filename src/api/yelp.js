import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer x8CGb5Cr6NYR6OmzEpr8Hq3dxtIfRfWRiUSXWBb-knNuCt-gA0j1dr_r9h2Sqy80qeoCufLSAb1d-qbaq2ySYburyDR8NnJFhvj4Bmzy-tyKpEHqSJQMrepW-8MAXnYx',

    }
})

