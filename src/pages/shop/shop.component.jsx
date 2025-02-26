import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import CollectionsOverView from "@/components/collection-overview/collection-overview.component";
import CollectionPage from "@/pages/collection/collection.component";

const ShopPage = () => {
  const match = useMatch("/shop/*"); // Lấy match từ hook

  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverView />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
