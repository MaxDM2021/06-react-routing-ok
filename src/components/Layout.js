import { Box } from "./Box";

export const Layout = () => {
    return <Box display="grid" gridTemplateColumns="280px 1fr">
    <div>Appbar</div>
    <div>Content</div>
    </Box>;
};