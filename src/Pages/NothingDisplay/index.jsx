
import React from "react"
import AmazonSearchResult from "../../Assets/img/amazon-search-result-page.jpg";
import AmazonProductListing from "../../Assets/img/amazon-product-listing-page.jpg";
import Header from "../../Common/Header";

const NothingDisplay = () => {

    return (
        <div className="bg-[#F0F3F4] flex flex-col items-center select-none text-gray-500 w-full h-full">
            <Header />
            <div className="text-4xl font-normal tracking-wider text-center  my-3">
                There's nothing to display
            </div>
            <div className="text-xs">The Chrome Extension can only display data for specific Amazon pages. Why not perform a search on one of the
                pages listed below.</div>
            <div className="mt-5 flex justify-between">
                <div className="w-[47%] inline-block align-top text-left max-w-[355px]">
                    <img className="max-h-[230px]" src={AmazonSearchResult} alt="Amazon Search Results" />
                    <div className="text-sm font-bold leading-5 text-left mt-4 ">1. Amazon Search Results</div>
                    <div className="leading-5 mt-1 text-xs ">You can run the Chrome Extension against any Amazon search results page. Just enter a product or keyword
                    into Amazon’s search bar and wait for the results to be displayed. Once there you are good to go!</div>
                </div>
                <div className="w-[47%] inline-block align-top text-left max-w-[355px]">
                    <img className="max-h-[230px]" src={AmazonProductListing} alt="Amazon Product Listings" />
                    <div className="text-sm font-bold leading-5 text-left mt-4">2. Amazon Product Listings</div>
                    <div className="leading-5 mt-1 text-xs">For a more in depth look at a specific product you can run the Chrome Extension against an Amazon Product
                    Listing page. This page can be accessed by selecting a product item from the Amazon search results page.
                    </div>
                </div>
            </div>
            <div className="mt-5 leading-5 mb-8 mr-16 text-xs">The Chrome Extension will also collect data from <b>Amazon’s Wish Lists, Seller, Seller Storefront</b> and
          <b> Buying Guide pages</b></div>
        </div>
    )
}

export default NothingDisplay