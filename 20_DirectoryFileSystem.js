class FileSystem {
  constructor() {
    this.directory = { root: {} };
    this.currDir = this.directory.root;
    this.currDirPath = "root";
  }

  createDirectory(name) {
    this.currDir[name] = {};
  }

  changeDirectory(path) {
    this.currDir = this.changeDirHelper(path);
    this.currDirPath = path;
  }

  changeDirHelper(path) {
    const paths = path.split("-");
    let current = this.directory;
    for (let key of paths) {
      current = current[key];
    }

    return current;
  }

  getCurrDirectory() {
    return this.currDir;
  }

  getCurrDirectoryPath() {
    return this.currDirPath;
  }

  addFile(name) {
    if (this.currDir.files) {
      this.currDir.files.push(name);
    } else {
      this.currDir["files"] = [name];
    }

    return true;
  }

  deleteFile(fileName) {
    if (this.currDir.files) {
      this.currDir.files = this.currDir.files.filter(
        (file) => file !== fileName
      );
    }

    return true;
  }

  deleteDirectory(dirName) {
    delete this.currDir[dirName];
  }

  getRootDirectory(){
    return this.directory;
  }
}


const dir = new FileSystem();
dir.createDirectory('prashant');
dir.changeDirectory('root-prashant');
dir.addFile('index.html');
dir.addFile('app.js');
dir.changeDirectory('root');
dir.createDirectory('practice');
dir.changeDirectory('root-practice');
dir.addFile('index.html');
dir.addFile('app.js');
dir.createDirectory('build');
dir.changeDirectory('root-practice-build');
dir.addFile('a.png');
dir.addFile('b.jpg');
dir.deleteFile('a.png');
dir.changeDirectory('root');
dir.deleteDirectory('prashant');
console.log(JSON.stringify(dir.getRootDirectory(), null, 2));