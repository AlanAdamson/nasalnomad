<?php

// autoload_framework_real.php @generated by Composer

class ComposerAutoloaderInitd8e4202d6a4d65374e89df18968e1c3a
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitd8e4202d6a4d65374e89df18968e1c3a', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader();
        spl_autoload_unregister(array('ComposerAutoloaderInitd8e4202d6a4d65374e89df18968e1c3a', 'loadClassLoader'));

        $classMap = require __DIR__ . '/autoload_framework_classmap.php';
        if ($classMap) {
            $loader->addClassMap($classMap);
        }
        $loader->register(true);

        return $loader;
    }
}
