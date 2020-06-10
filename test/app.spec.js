const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('JHipster generator hypersistence-optimizer', () => {
    describe('Test with Maven and AngularX', () => {
        beforeEach(done => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/maven-angularX'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    useHo: false
                })
                .on('end', done);
        });
        it('should not generate configuration files', () => {
            assert.noFile([
                'src/main/resources/META-INF/services/org.hibernate.boot.spi.SessionFactoryBuilderFactory',
                'src/main/java/com/mycompany/myapp/config/HypersistenceConfiguration.java'
            ]);
        });
    });

    describe('Test with Maven and AngularX', () => {
        beforeEach(done => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/maven-angularX'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    useHo: true
                })
                .on('end', done);
        });
        it('should generate configuration files', () => {
            assert.file([
                'src/main/resources/META-INF/services/org.hibernate.boot.spi.SessionFactoryBuilderFactory',
                'src/main/java/com/mycompany/myapp/config/HypersistenceConfiguration.java'
            ]);
        });
    });
    describe('Test with Gradle and React', () => {
        beforeEach(done => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/gradle-react'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    useHo: false
                })
                .on('end', done);
        });
        it('should not generate configuration files', () => {
            assert.noFile([
                'src/main/resources/META-INF/services/org.hibernate.boot.spi.SessionFactoryBuilderFactory',
                'src/main/java/com/mycompany/myapp/config/HypersistenceConfiguration.java'
            ]);
        });
    });

    describe('Test with Gradle and React', () => {
        beforeEach(done => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/gradle-react'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    useHo: true
                })
                .on('end', done);
        });
        it('should generate configuration files', () => {
            assert.file([
                'src/main/resources/META-INF/services/org.hibernate.boot.spi.SessionFactoryBuilderFactory',
                'src/main/java/com/mycompany/myapp/config/HypersistenceConfiguration.java'
            ]);
        });
    });
});
