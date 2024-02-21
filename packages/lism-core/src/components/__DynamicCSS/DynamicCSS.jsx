// import React from 'react';

export default function DynamicCSS({ css }) {
	if (!css) return null;
	return <style jsx>{css}</style>;
}
