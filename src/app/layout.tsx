import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Furniro — Furniture Hardware Store for Home & Interior",
	description:
		"Furniro is an online store offering high-quality furniture hardware for home and interior. Explore decorative and functional hardware — handles, hinges, mechanisms, furniture legs, and more.",
	keywords: ["furniture"],
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				<Header />

				{children}

				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					closeButton={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<Footer />
			</body>
		</html>
	);
}
