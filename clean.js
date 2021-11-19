import { existsSync, rmSync } from 'fs';

function deleteFolderRecursive(path) {
	console.log(`Deleting directory "${path}"...`);
	if (existsSync(path)) {
		rmSync(path, {
			force: true,
			recursive: true
		});
	}
}

console.log('Cleaning old files...');

const paths = ['./build'];

paths.forEach((path) => {
	deleteFolderRecursive(path);
});

console.log('Successfully cleaned!');
