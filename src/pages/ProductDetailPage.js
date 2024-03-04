import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetail";

export function ProductDetailPage() {
    return (<>
    <div>
        <Navbar>
            <ProductDetail></ProductDetail>
        </Navbar>
    </div>
    </>  );
}
