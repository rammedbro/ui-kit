const fs = require('fs');
const { execSync } = require('child_process');
const pkg = require('../package.json');
const chalk = require('chalk');
const { Select } = require('enquirer');
const { checkForLatestVersion } = require('../.o3/utils/cli');
const { compare } = require('../.o3/utils/versioning/compare');

/**
 * Дает пользователю выбрать версию из списка
 * Возвращает выбранную версию
 */
const getNewVersion = async (versions) => {
  const versionSelect = new Select({
    name: 'templateVersion',
    message: 'Забыли повысить версию ui-kit. Выберите какую версию повышаем',
    choices: versions
  });

  const templateVersion = await versionSelect.run();

  return templateVersion.slice(templateVersion.indexOf('-> ') + 3);
};

/**
 * Формирует для выбора возможные варианты новых версий
 */
const getNewVersionOptions = (publishPkgVersion) => {
  const [major, minor, patch] = publishPkgVersion.split('.').map(version => +version);

  const optionMajor = `Major (Обновление платформы): ${publishPkgVersion} -> ${major + 1}.0.0`;
  const optionMinor = `Minor (Новый компонент / обновление пропсов в компоненте): ${publishPkgVersion} -> ${major}.${minor + 1}.0`;
  const optionPatch = `Patch (Правка багов / обновление шрифтов или цветов): ${publishPkgVersion} -> ${major}.${minor}.${patch + 1}`;

  return [optionPatch, optionMinor, optionMajor];
};

(async () => {
  console.log(chalk.yellow('...starting check ui-kit version'));
  // get current latest lib version
  const publishPkgVersion = await checkForLatestVersion(pkg.name) || pkg.version;

  if (compare(pkg.version, publishPkgVersion)) {
    console.log(chalk.yellow('Version ui-kit is relevant'));
    return;
  }

  // replace pkg version
  pkg.version = await getNewVersion(getNewVersionOptions(publishPkgVersion));
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');

  // git
  execSync('git add package.json');

  console.log(chalk.green(`Version ui-kit is upped successfully. New version: @bx-fe/ui-kit@${pkg.version}"`));
})();
