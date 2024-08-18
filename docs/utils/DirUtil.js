import fs from 'fs';
import path from 'path';
import pathPosix from 'path/posix'; // 使用 POSIX 风格的路径模块
export function generateSidebarJson(directoryPath) {
    console.log(`当前执行路径: ${process.cwd()}`);
    const sidebarJson = [];
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // 如果是目录，则递归处理
            const childFiles = fs.readdirSync(filePath).map(childFile => path.join(file, childFile));
            sidebarJson.push({
                text: file,
                collapsable: false,
                children: childFiles.map(childFilePath => {
                    // 假设所有文件都是 Markdown 文件
                    // return path.join(file, `${childFilePath}`);
                    return childFilePath.replace("\\", "/");
                })
            });
        }
    });
    console.log(sidebarJson)
    return sidebarJson;
}

