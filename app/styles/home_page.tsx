import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    home_page_view: {
        flex: 1,
        margin: "2%",
    },

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    logoContainer: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: "50%",
        height: "50%",
        resizeMode: "contain",
    },

    optionsContainer: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
    },

    optionButton: {
        width: "40%",
        height: "15%",
        marginVertical: "3%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#E0E0E0", // Placeholder background
    },

    optionText: {
        fontSize: 16,
        color: "#007BFF",
    },
});

export default styles;