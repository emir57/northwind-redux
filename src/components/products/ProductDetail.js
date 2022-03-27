import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { TextInput } from '../toolbox/TextInput'

const ProductDetail = (
    categories,
    product,
    onSave, onChange
) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error="Hata" />
            <button type="submit" className="btn btn-info">Save</button>


        </form>
    )
};
export default ProductDetail;