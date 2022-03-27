import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import TextInput from '../toolbox/TextInput'
import SelectInput from '../toolbox/SelectInput'

const ProductDetail = ({
    categories,
    product,
    onSave, onChange
}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error="Hata" />
            <button type="submit" className="btn btn-info">Save</button>

            <SelectInput
                name="categoryId"
                label="Category"
                value={product.categoryId || ""}
                defaultOption="Seçiniz"
                options={categories.map(category => (
                    {
                        text: category.categoryName,
                        value: category.id
                    }
                ))}
                onChange={onChange}
                error="Hata"
            />


        </form>
    )
};
export default ProductDetail;